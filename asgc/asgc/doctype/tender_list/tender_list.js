// Copyright (c) 2023, Mohammed Nasser and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tender List', {
	location: function(frm) {
		console.log(JSON.parse(frm.doc.location));
	}
});


frappe.ui.form.on('Tender List', "refresh", function(frm) {
	frm.add_custom_button('Create Awarded Project', () => {
		frappe.new_doc('Projects Awarded', {
			project_number: frm.doc.project_number
		})
	})

});