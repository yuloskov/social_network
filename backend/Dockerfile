FROM python:3.11.2-alpine

ARG PORT

WORKDIR /backend

COPY /requirements.txt /backend

RUN pip install --no-cache-dir --upgrade -r /backend/requirements.txt

COPY . /backend

EXPOSE ${PORT}