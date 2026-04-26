#!/usr/bin/env bash

cd frontend
pnpm build
cd ..
cp -r frontend/dist/* backend/src/frontend
cd backend
pnpm build
