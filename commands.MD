# Create Migration 
npx knex migrate:make add_new_field_to_users

# Run Migration
npx knex migrate:latest

# Create Seed
npx knex seed:make seed_name