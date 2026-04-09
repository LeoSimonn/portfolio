#!/usr/bin/env python3
"""Remove outer black background (flood-fill from edges) and export favicon PNG + ICO."""
import io
import struct
from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]


def is_dark(r: int, g: int, b: int, max_sum: int = 95) -> bool:
    """Pixels considered 'black' for connectivity (outer bg + letter L)."""
    return r + g + b <= max_sum


def flood_outer_dark(img: Image.Image) -> Image.Image:
    w, h = img.size
    rgba = img.convert("RGBA")
    px = rgba.load()
    visited = [[False] * w for _ in range(h)]
    q: deque[tuple[int, int]] = deque()

    for x in range(w):
        for y in (0, h - 1):
            r, g, b, _ = px[x, y]
            if is_dark(r, g, b) and not visited[y][x]:
                visited[y][x] = True
                q.append((x, y))
    for y in range(h):
        for x in (0, w - 1):
            if not visited[y][x]:
                r, g, b, _ = px[x, y]
                if is_dark(r, g, b):
                    visited[y][x] = True
                    q.append((x, y))

    while q:
        x, y = q.popleft()
        for dx, dy in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
                r, g, b, _ = px[nx, ny]
                if is_dark(r, g, b):
                    visited[ny][nx] = True
                    q.append((nx, ny))

    for y in range(h):
        for x in range(w):
            if visited[y][x]:
                px[x, y] = (0, 0, 0, 0)
    return rgba


def png_to_ico(png_bytes: bytes, ico_path: Path) -> None:
    if len(png_bytes) < 8 or png_bytes[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError("not PNG")
    w = h = 64
    width_byte = w if w < 256 else 0
    height_byte = h if h < 256 else 0
    offset = 6 + 16
    icondir = struct.pack("<HHH", 0, 1, 1)
    entry = struct.pack(
        "<BBBBHHII",
        width_byte,
        height_byte,
        0,
        0,
        1,
        32,
        len(png_bytes),
        offset,
    )
    ico_path.write_bytes(icondir + entry + png_bytes)


def main() -> None:
    src = ROOT / "favicon_src.png"
    if not src.exists():
        raise SystemExit(f"Missing {src}")

    img = Image.open(src)
    if img.mode != "RGB":
        img = img.convert("RGB")
    transparent = flood_outer_dark(img)
    # Sharp favicon size
    small = transparent.resize((64, 64), Image.Resampling.LANCZOS)
    png_path = ROOT / "favicon.png"
    small.save(png_path, "PNG", optimize=True)

    buf = io.BytesIO()
    small.save(buf, format="PNG", optimize=True)
    png_to_ico(buf.getvalue(), ROOT / "favicon.ico")
    print(f"Wrote {png_path} and favicon.ico")


if __name__ == "__main__":
    main()
