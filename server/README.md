<h1 align="center">
  <img src="../web/src/assets/images/proffy.png" alt="ecoleta logo">
</h1>

<h3 align="center">
<strong>Back-end</strong>
</h3>

<p align="center">
  <a href="#space_invader-technologies">Technologies</a> |
  <a href="#arrow_right-endpoint">Endpoint</a>
  <br>
  <br>
</p>

## :space_invader: Technologies

- [express](http://expressjs.com/)
- typescript
- [knex.js](http://knexjs.org/)
- sqlite
- cors
- [ts-node-dev](https://github.com/whitecolor/ts-node-dev)

## :arrow_right: Endpoint

```bash
# classes
[GET] http://localhost:3333/classes?week_day=4&subject=Matem%C3%A1tica&time=11%3A00
[POST] http://localhost:3333/classes
{
	"name": "Professor",
	"age": "40",
	"avatar": "https://api.adorable.io/avatars/285/abott@adorable.png",
	"whatsapp": "11 4333-0022",
	"bio": "pdjspadjasd dpoasjdpo sajdpoasdsapdjpsoa d",
	"subject": "Matemática",
	"cost": 80,
	"schedule": [
		{"week_day": 1, "from": "8:00", "to": "12:00"},
		{"week_day": 3, "from": "10:00", "to": "18:00"},
		{"week_day": 4, "from": "8:00", "to": "12:00"}
	]
}

# connections
[GET] http://localhost:3333/connections
[POST] http://localhost:3333/connections
{
	"user_id": 1
}
```
