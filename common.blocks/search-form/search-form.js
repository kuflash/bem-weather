modules.define('search-form', ['BEMHTML', 'i-bem__dom'], function(provide, BEMHTML, BEMDOM) {
	provide(BEMDOM.decl(this.name, {
			query : "",

			cities : [
				"Архангельск",
				"Северодвинск",
				"Новодвинск",
				"Североморск",
				"Москва",
				"Новосибирск",
				"Пермь",
				"Санкт-Петербург",
				"Вологда",
				"Астрахань",
				"Кострома",
				"Череповец"
			],

			onSetMod: {
				js: {
					inited : function() {
						BEMDOM.blocks.input.on(this.domElem, 'change', this._onChange, this);
						BEMDOM.append(
							this.domElem,
							BEMHTML.apply({
								block: 'button',
								mods: {theme: 'islands', size: 'm'},
								text: 'Искать'
							})
						);
					}
				}
			},

			_onChange : function (event) {
				this.query = event.target._val;
				if (this.query.length < 2) return;
				//console.log(this.domElem)
				//this.cities.filter(this._filterCities, this)
      },

			_filterCities : function (city) {
				return city.toLowerCase().indexOf(this.query.toLowerCase()) === 0;
			}
		},
		{}
	));
});