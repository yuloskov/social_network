FROM python:3.11.2-alpine

WORKDIR /social_network

COPY /requirements.txt /social_network

RUN pip install --no-cache-dir --upgrade -r /social_network/requirements.txt

COPY . /social_network

EXPOSE 8000

CMD [ "python", "-u", "/social_network/manage.py", "runserver"]
