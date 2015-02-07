({
    block : 'page',
    title : 'Hello, World!',
    styles : [
        { elem : 'css', url : '_index.css' }
    ],
    scripts : [
        { elem : 'js', url : '_index.js' }
    ],
    content : [
			{
				elem : 'wallpaper',
				content : [
					{
						block : 'image',
						url : 'img/bg.jpg',
						title : 'Winter',
						mix : [ {	block : 'wallpaper',	mods : { 'blured' : true } } ]
					}
				]
			},
			{
				elem : 'inner',
				content : [
					{
						block : 'card',
						content : [
							{
								elem : 'wallpaper',
								content : [
									{
										block : 'image',
										url : 'img/bg.jpg',
										title : 'Winter',
										mix : [ {	block : 'wallpaper' } ]
									}
								]
							},
							{
								block : 'header',
								mix : [ { block : 'card',  elem : 'header' } ],
								content : [
									{
										elem : 'left-side',
										content : [
											{
												block : 'search-form',
												tag : 'form',
												js: true,
												content : [
													{
														elem: 'controls',
														mix: [{block: 'control-group'}],
														content: [
															{
																block: 'input',
																mods: {theme: 'islands', size: 'm', type: 'search'},
																placeholder: 'Введите населенный пункт',
																mix : [ { block : 'search-form', elem : 'query-field' } ]
															},
															{
																block: 'button',
																mods: {theme: 'islands', size: 'm'},
																text: 'Искать',
																mix : [ { block : 'search-form', elem : 'button' } ]
															}
														]
													}
												]
											}
										]
									},
									{
										elem : 'right-side',
										content : [
											{
												block : 'radio-group',
												mods : { theme : 'islands', size : 'm', type : 'button' },
												name : 'radio-button',
												options : [
													{ val : 1, text : 'Футбол' },
													{ val : 2, text : 'Баскетбол' },
													{ val : 3, text : 'Гандбол' }
												]
											}
										]
									}
								]
							},
							{
								elem : 'main'
							},
							{
								elem : 'footer'
							}
						]
					}
				]
			}
    ]
});
