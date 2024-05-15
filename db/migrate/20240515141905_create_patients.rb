class CreatePatients < ActiveRecord::Migration[7.1]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.date :date_of_birth
      t.string :sex
      t.string :phone_number
      t.string :email
      t.string :emergency_contact_name
      t.string :emergency_contact_phone_number
      t.string :emergency_contact_relationship
      t.string :address
      t.string :preferred_language
      t.string :occupation
      t.string :preexisting_conditions
      t.string :allergies
      t.string :medications
      t.string :surgeries
      t.string :transportation_needs
      t.string :family_medical_history

      t.timestamps
    end

    add_index :patients, :email, unique: true
    add_index :patients, :first_name
    add_index :patients, :middle_name
    add_index :patients, :last_name
    add_index :patients, :date_of_birth
  end
end
