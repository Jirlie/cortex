// Copyright (c) 2024, Mohammed Nasser and contributors
// For license information, please see license.txt

frappe.ui.form.on('Proposal test', "refresh", function(frm) {
	frm.add_custom_button('Create Awarded Project', () => {
		frappe.new_doc('Projects Awarded', {
			project_number: frm.doc.project_number
		})
	})

});