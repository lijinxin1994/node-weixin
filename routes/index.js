import user from './user.js'
import robot from './robot.js'

export default app => {
	app.get('/', async (req, res, next) => {
		res.send('sdfsfdsfdsf')
	})
	app.use('/user', user)
	app.use('/robot', robot)
}