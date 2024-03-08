// Copyright (c) 2023, Mohammed Nasser and contributors
// For license information, please see license.txt

frappe.ui.form.on('Preposal List', "onload", function(frm) {
	frm.set_query("city", function() {
		return {
			"filters": {
				"country": frm.doc.country
			}
		};
	});
	
	
	
	
	
	  
});


frappe.ui.form.on('Preposal List', "refresh", function(frm) {
        frm.add_custom_button('Create Tender', () => {
            frappe.new_doc('Tender List', {
                project_number: frm.doc.project_number
            })
        })

});