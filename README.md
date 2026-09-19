# Proyecto MCP: Lista de Compras y Juego de Fútbol

Trabajo práctico sobre el **Protocolo de Contexto de Modelos (MCP)**: integración de aplicaciones LLM con herramientas externas.

## 📁 Contenido del repositorio

- `.vscode/`: Configuración de los servidores MCP utilizados.
- `blender/`: Modelos 3D de la pelota de fútbol (`.blend` y `.fbx`).
- `juego-de-futbol/`: Proyecto de Roblox Studio del juego de fútbol.
- `lista-compras/`: Aplicación web de lista de compras (HTML, CSS, JS).
- `capturas/`: Capturas de pantalla de las pruebas.

## 🛠️ Tecnologías y herramientas

- **MCP (Model Context Protocol)**
- **Blender** (modelado 3D)
- **Roblox Studio** (juego)
- **VS Code + GitHub Copilot** (cliente MCP)
- **HTML, CSS, JavaScript** (app de lista de compras)
- **Playwright MCP** (pruebas automatizadas)

## 🎮 Juego de Fútbol

- Pelota modelada en **Blender** y exportada a **Roblox Studio** (formato FBX).
- Campo, arcos, marcador, sistema de goles con debounce.
- HUD con marcador en vivo y mensaje de gol.
- Pantalla de estadio con marcador grande.

## 🛒 App Lista de Compras

- Agregar, eliminar y persistir items en `localStorage`.
- Probada automáticamente con **Playwright MCP**.

### Cómo ejecutar la app

Abrir `lista-compras/lista-de-compras.html` en cualquier navegador web.

## ⚙️ Configuración MCP utilizada

El archivo `.vscode/mcp.json` contiene la configuración de los 3 servidores MCP:

```json
{
  "servers": {
    "blender": { "type": "stdio", "command": "uvx", "args": ["blender-mcp"] },
    "Roblox_Studio": { "type": "http", "url": "http://localhost:44755" },
    "playwright": { "type": "stdio", "command": "npx", "args": ["-y", "@playwright/mcp@latest"] }
  }
}
