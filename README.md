# HR-портал

## Запуск

Нужны Python 3.12, Node.js 22.12+ и запущенный PostgreSQL. Команды для PowerShell.

При первом запуске создайте базу `hr_ipr` и файл `.env`. Выполните команды из корня проекта.

```powershell
createdb -U postgres hr_ipr
Copy-Item .env.example .env
```

Укажите параметры подключения в `DATABASE_URL` файла `.env` и запустите API.

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m alembic upgrade head
.\.venv\Scripts\python.exe -m scripts.seed_data
.\.venv\Scripts\python.exe -m uvicorn app.main:app --host 127.0.0.1 --port 8000
```

Запустите интерфейс в другом терминале из корня проекта.

```powershell
cd frontend
npm.cmd ci
npm.cmd run dev
```

Откройте [localhost:5173](http://localhost:5173). Для входа в демобазу используйте `petrova@company.com` (сотрудник) или `pavlova@company.com` (HR). Пароль для обеих записей - `password123`.

## Функции

- Вход и доступ к действиям по роли.
- Создание, просмотр, редактирование и удаление ИПР и компетенций.
- Поиск, фильтры, сортировка и пагинация. Просмотр справочника отделов.
- Валидация форм, подтверждение удаления и уведомления о результате.
