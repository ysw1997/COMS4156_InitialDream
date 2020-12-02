"""Import UserMixin."""
from flask_login import UserMixin


class User(UserMixin):
    """用户类"""

    # initialize
    def __init__(self, username):
        """Initialize."""
        self.username = username
        # self.userid =
        self.userstatus = 'green'
        self.is_negative = True
        # self.at_risk = False
        self.quarantined = False
        self.quarantine_days = 0

    def get_quarantine_days(self):
        """Get the quarantine days."""
        return self.quarantined_days

    def set_quarantine_dyas(self, quarantine_days):
        """Set the quarantine days."""
        self.quarantined = quarantine_days

    def add_quarantine_days(self):
        """add quarantine days."""
        self.quarantine_days += 1

    def get_quarantine(self):
        """Get the quarantine state."""
        return self.quarantined

    def set_quarantine(self, quarantine):
        """Set the quarantine state."""
        self.quarantined = quarantine

    def get_negative(self):
        """Get the covid-19 test state."""
        return self.is_negative

    def set_negative(self, negative):
        """Set the covid-19 test state."""
        self.is_negative = negative

    def get_username(self):
        """Get the username."""
        return self.username

    def set_username(self, username):
        """Set the username."""
        self.username = username

    def get_userstatus(self):
        """Get the userstatus"""
        return self.userstatus

    def set_userstatus(self, status):
        """Set the userstatus"""
        self.username = status


@LOGIN_MANAGER.user_loader
def load_user(user_id):
    """Load the user."""
    return User.get_username(user_id)
