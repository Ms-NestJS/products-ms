#!/bin/bash

# Ruta origen
ORIG="./prisma/dev.db"

# Ruta destino (ajusta si tu usuario es distinto)
DEST="/mnt/c/Users/User/Desktop/dev.db"

# Comprobamos si existe
if [ -f "$ORIG" ]; then
  cp "$ORIG" "$DEST"
  echo "✅ Copia completada: $DEST"
else
  echo "❌ No se encontró $ORIG"
fi
