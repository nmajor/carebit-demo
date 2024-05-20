# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_05_20_095312) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "patients", force: :cascade do |t|
    t.string "first_name"
    t.string "middle_name"
    t.string "last_name"
    t.date "date_of_birth"
    t.string "sex"
    t.string "phone_number"
    t.string "email"
    t.string "emergency_contact_name"
    t.string "emergency_contact_phone_number"
    t.string "emergency_contact_relationship"
    t.string "address"
    t.string "preferred_language"
    t.string "occupation"
    t.string "preexisting_conditions"
    t.string "allergies"
    t.string "medications"
    t.string "surgeries"
    t.string "transportation_needs"
    t.string "family_medical_history"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "last_visited_at"
    t.index ["date_of_birth"], name: "index_patients_on_date_of_birth"
    t.index ["email"], name: "index_patients_on_email", unique: true
    t.index ["first_name"], name: "index_patients_on_first_name"
    t.index ["last_name"], name: "index_patients_on_last_name"
    t.index ["middle_name"], name: "index_patients_on_middle_name"
  end

end
