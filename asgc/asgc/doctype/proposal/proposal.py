# Copyright (c) 2024, Mohammed Nasser and contributors
# For license information, please see license.txt

import frappe
from dateutil.relativedelta import relativedelta
from frappe.model.document import Document
from datetime import datetime

class Proposal(Document):
	def validate(self):
		start_date = datetime.strptime(self.expected_start_date, "%Y-%m-%d")
		end_date = datetime.strptime(self.expected_end_date, "%Y-%m-%d")
		diff = relativedelta(end_date, start_date)
		months = diff.months + 12*diff.years
		self.duration_months = f"{months} Months"

	@frappe.whitelist()
	def create_proposal(self):
		proposal = frappe.new_doc("Proposal")
		proposal.project_number = self.project_number
		proposal.insert()		
