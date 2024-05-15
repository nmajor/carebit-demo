# Notes

Patient scaffold:

```
rails generate scaffold Patient \
  first_name:string \
  middle_name:string \
  last_name:string \
  date_of_birth:date \
  sex:string \
  phone_number:string \
  email:string \
  emergency_contact_name:string \
  emergency_contact_phone_number:string \
  emergency_contact_relationship:string \
  address:string \
  preferred_language:string \
  occupation:string \
  preexisting_conditions:string \
  allergies:string \
  medications:string \
  surgeries:string \
  transportation_needs:string \
  family_medical_history:string
```

# Project Specs

Rails 7 and Ruby 3.3

For the tech task, it would be great to see a little Rails + React app to allow the user to create, view, edit, delete and search for patients.

- Rails 7 app backed by Postgres as the database (if on Mac, Postgres.app is handy)
- Database migration to create a patients table with a few relevant fields
- Controller and model; controller accepts and returns JSON for each of the relevant RESTful actions
- RSpec request specs for the controller for integration testing
- For simplicity's sake, searching can just be on one field instead of using a gem like Ransack
- The JSON data is consumed by the React app (we usually just put the React app code in an 'admin' folder in the RAILS_ROOT/clients directory so it's a monorepo)
- Vite ([https://vitejs.dev/](https://vitejs.dev/)) is what we use for running a local React environment
- We use Tailwind for CSS but you can use what you like for styling
- The design should look like a typical SaaS app with a vertical navigation on the left hand side and then a wider main body to the right of it where the page content is displayed.
- Bonus points for design and UX
- Don't worry about authentication/authorization
- Deliverable will be a single ZIP file or single public GitHub repo so I can run bundle install and npm install to install dependencies, then run rails db:setup and finally boot the Rails and Vite servers.

As I mentioned, we aim for 2-3 hours to be spent on this and ideally would like to have the deliverable back in 7 days or so. Do let me know if you have any questions and looking forward to seeing your work!
