const questions = [
	{
		questionText: 'Насколько сильно вы любите побеждать?',
		image: './assets/img/1st.jpg',
		answers: [
			{
				answerText: 'Очень, победа есть цель состязания',
				value: 3,
			},
			{
				answerText: 'Победа, не главное, главное участие',
				value: 4,
			},
			{
				answerText: 'Зачем играть, если на скамейке теплее',
				value: 1,
			},
			{
				answerText: 'Зачем приезжать на игры, если дома компик',
				value: -1,
			},
		]
	},

	{
		questionText: 'Насколько вы умеете играть на команду?',
		image: './assets/img/2nd.jpg',
		answers: [
			{
				answerText: 'Мячик можно подержать и подольше',
				value: 2,
			},
			{
				answerText: 'Партнеры отлично играют, также как и я',
				value: 4,
			},
			{
				answerText: 'Пас это совсем не мое, лучше сделаю за других',
				value: 0,
			},
			{
				answerText: 'Зачем приезжать на игры, ну правда, расскажите',
				value: -1,
			},
		]
	},

	{
		questionText: 'Как часто вы ездите на игры?',
		image: './assets/img/3rd.jpg',
		answers: [
			{
				answerText: 'Приезжаю на каждую игру',
				value: 3,
			},
			{
				answerText: 'Езжу через раз, но правда стараюсь',
				value: 2,
			},
			{
				answerText: 'Бываю на 2-3 играх за все время',
				value: 1,
			},
			{
				answerText: 'А зачем это делать?',
				value: -1,
			},
		]
	},

	{
		questionText: 'Как вы ведёте себя во время матча?',
		image: './assets/img/4th.jpg',
		answers: [
			{
				answerText: 'Уважительно, не толкаюсь не спорю',
				value: 3,
			},
			{
				answerText: 'Могу начать стычку из-за простых вещей',
				value: 0,
			},
			{
				answerText: 'Могу сказать "пару ласковых" соперникам',
				value: 1,
			},
			{
				answerText: 'Я не приезжаю на игры, хватит уже спрашивать!',
				value: -1,
			},
		]
	},

	{
		questionText: 'Как часто вы забиваете?',
		image: './assets/img/5th.jpg',
		answers: [
			{
				answerText: 'Раз в 5 игр',
				value: 1,
			},
			{
				answerText: 'Предпочитаю пасовать партнёрам',
				value: 2,
			},
			{
				answerText: 'В каждом матче',
				value: 3,
			},
			{
				answerText: 'Я все уже несколько раз сказал...',
				value: -1,
			},
		]
	},

	{
		questionText: 'На какой позиции вы играете?',
		image: './assets/img/6th.jpg',
		answers: [
			{
				answerText: 'Нападающий',
				value: 3,
			},
			{
				answerText: 'Полузащитник',
				value: 2,
			},
			{
				answerText: 'Защитник',
				value: 1,
			},
			{
				answerText: 'Вратарь',
				value: 0,
			},
		]
	},
]