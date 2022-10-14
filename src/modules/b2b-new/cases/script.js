class TabForB2B {
	constructor(selector) {
		this.selector = selector;
		this.init();
	}
	init() {
		document.querySelectorAll(this.selector).forEach(tab => {
			tab.addEventListener('click', (e) => {
				e.preventDefault();
				this.checkActive(tab);
				this.changeContent(tab);
			})
		})
	}
	changeContent(tab) {
		const link = tab.dataset.href;
		let tabContainers = tab.closest('.tab-container-resist').querySelectorAll('.tab-el--container');
		tabContainers.forEach(cont => {
			cont.querySelectorAll('.tab-el').forEach(tabEl => {
				if (tabEl.dataset.id === link) {
					tabEl.classList.add('active');
				} else {
					tabEl.classList.remove('active');
				}
			})
		});
	}
	checkActive(tab) {
		if (tab.classList.contains('b2b__tab-item-active')) return false;
		tab.classList.add('b2b__tab-item-active');
		tab.closest('.b2b__tabs-container').querySelectorAll(this.selector).forEach(otherTabs => {
			if (otherTabs !== tab) {
				otherTabs.classList.remove('b2b__tab-item-active');
			}
		})
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new TabForB2B('.js-tab-b2b');
})