# livescore

## On local

develop บนเครื่องตัวเองจนพอใจ

```bash
$ npm i
$ npm run dev
```

ทดสอบ build ถ้าไม่มีอะไรพลาดก็ push code ขึ้น git

```bash
$ npm run build
$ git add .
$ git commit -m "foo bar"
$ git push
```

## On server

ssh เข้า server แล้วไปใช้คำสั่งด้านล่าง

```bash
$ cd ~/livescore
$ make update
```
