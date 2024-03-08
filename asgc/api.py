import frappe
from dateutil.relativedelta import relativedelta

def diff(doc, event):
    diff = relativedelta(doc.expected_end_date, doc.expected_start_date)
    months = diff.months + 12*diff.years
    doc.duration_in_months = f"{months} Months"

