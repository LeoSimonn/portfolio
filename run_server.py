#!/usr/bin/env python3
"""
Servidor simples para executar o portfolio localmente
"""

import http.server
import socketserver
import os

# Configurações
DEFAULT_PORT = 8000
PORT_RANGE = range(8000, 8010)
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)


def main():
    os.chdir(DIRECTORY)

    print("🚀 Iniciando servidor do portfolio...")
    print(f"📁 Diretório: {DIRECTORY}")
    print("🛑 Para parar: Ctrl+C")
    print("-" * 40)

    last_error = None
    for port in PORT_RANGE:
        try:
            httpd = ReusableTCPServer(("", port), Handler)
            break
        except OSError as e:
            last_error = e
            httpd = None
    else:
        print(f"❌ Nenhuma porta livre em {PORT_RANGE.start}-{PORT_RANGE.stop - 1}: {last_error}")
        raise SystemExit(1)

    print(f"🔗 Acesse: http://localhost:{port}")
    if port != DEFAULT_PORT:
        print(f"   (porta {DEFAULT_PORT} estava ocupada)")

    try:
        with httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n✅ Servidor encerrado com sucesso!")
        httpd.shutdown()

if __name__ == "__main__":
    main()