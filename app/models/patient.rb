class Patient < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :date_of_birth, presence: true
  validates :sex, presence: true
  validates :email, presence: true, uniqueness: true
  validates_plausible_phone :phone_number, presence: true
end
