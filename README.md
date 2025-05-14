# 🏟️ E-Ventia — Sistema de Gestión de Entradas para Eventos

**E-Ventia** es una aplicación web moderna para la gestión de entradas digitales en eventos deportivos, conciertos y espectáculos. Utiliza códigos QR para facilitar el acceso seguro y rápido a los eventos, tanto para organizadores como para asistentes.

---

## 🚀 Funcionalidades

- 🧾 Crear y administrar eventos con fecha, lugar y capacidad
- 🎟️ Comprar entradas digitales asociadas a cada usuario
- 📱 Generar y escanear **códigos QR** para validar el ingreso
- 🔐 Autenticación de usuarios y control de roles (admin / asistente)
- 📊 Panel de administración con métricas de asistencia
- ☁️ Backend en la nube con Supabase 

---

## 🛠️ Tecnologías utilizadas

### Frontend:
- **React + TypeScript** (usando Vite)
- **React Router** para la navegación

### Backend / Servicios:
- **Supabase** (Base de datos, Autenticación, Almacenamiento)
- **NestJS**  Para la lógica de backend personalizada

---

## 📦 Tablas de base de datos (Supabase)

- `users`: información de usuarios, roles, login por email
- `events`: título, descripción, fecha, lugar, capacidad
- `tickets`: info de entradas, QR, relación evento/usuario
- `scans`: registro de escaneos de QR (fecha, hora, dispositivo)

---

_Agrega aquí capturas de pantalla o video de demostración._

---

## 🧑‍💻 Instalación

```bash
# Clonar el proyecto
git clone https://github.com/tu-usuario/e-ventia.git
cd e-ventia

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
