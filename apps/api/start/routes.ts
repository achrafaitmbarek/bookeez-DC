import router from '@adonisjs/core/services/router';

router.get('/', () => {
	return {
		hello: 'world',
	};
});
