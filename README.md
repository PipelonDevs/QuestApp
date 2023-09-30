# QuestApp
hackyeah concept

---------------------------------------

# How to Flask Migrate


# Step 1: Initialize Migrations
To create the initial migration setup, run the following command:

`flask db init`

This will generate a migrations directory in your project.

# Step 2: Create Migrations
After making changes to your database models, generate a migration script for those changes. Replace "description_of_changes" with a brief description of the changes:

`flask db migrate -m "description_of_changes"`

# Step 3: Apply Migrations

Apply the migrations to update the database schema:

`flask db upgrade`

------------------------------------------
