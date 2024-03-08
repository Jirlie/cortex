frappe.pages['cash-flow-chart'].on_page_load = function(wrapper) {
	new MyPage(wrapper);
}


MyPage = Class.extend({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Chart',
			single_column: true
		});
		this.make();
	},

	make: function(){
		let me = $(this);

		//body

		let body = `hello2`;

		$(frappe.render_template(body, this)).appendTo(this.page.main);
	}


})


