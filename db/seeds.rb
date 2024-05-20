# Seed Patients
10.times do
  Patient.create!(
    first_name: Faker::Name.first_name,
    middle_name: Faker::Name.middle_name,
    last_name: Faker::Name.last_name,
    date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 90),
    sex: ["male", "female"].sample,
    phone_number: Faker::Base.numerify('+44 7911 ######'),
    email: Faker::Internet.email,
    emergency_contact_name: Faker::Name.name,
    emergency_contact_phone_number: Faker::PhoneNumber.phone_number,
    emergency_contact_relationship: Faker::Relationship.familial,
    address: Faker::Address.full_address,
    preferred_language: Faker::Nation.language,
    occupation: Faker::Job.title,
    preexisting_conditions: Faker::Lorem.sentence,
    allergies: Faker::Food.ingredient,
    medications: Faker::Lorem.word,
    surgeries: Faker::Lorem.sentence,
    transportation_needs: Faker::Lorem.sentence,
    family_medical_history: Faker::Lorem.sentence,
    last_visited_at: [nil, Faker::Date.between(from: 1.year.ago, to: Date.today)].sample
  )
end