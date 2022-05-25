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

ActiveRecord::Schema.define(version: 2022_05_25_053626) do

  create_table "best_times", force: :cascade do |t|
    t.integer "user_id", null: false
    t.float "time_800"
    t.float "time_1000"
    t.float "time_1500"
    t.float "time_2000"
    t.float "time_3000"
    t.float "time_5000"
    t.float "time_10000"
    t.float "time_3000sc"
    t.float "time_5k"
    t.float "time_10k"
    t.float "time_half"
    t.float "time_marathon"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_best_times_on_user_id"
  end

  create_table "objectives", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "year", null: false
    t.integer "month", null: false
    t.string "content"
    t.text "todo_content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_objectives_on_user_id"
  end

  create_table "post_records", force: :cascade do |t|
    t.integer "post_id", null: false
    t.float "distance", null: false
    t.float "time", null: false
    t.float "pace"
    t.integer "record_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["post_id"], name: "index_post_records_on_post_id"
  end

  create_table "posts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "practice_day", null: false
    t.integer "weather"
    t.integer "place"
    t.integer "kind_of_practice", null: false
    t.text "content"
    t.integer "strength"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "practice_timezone"
    t.float "warming_up_distance"
    t.float "cooling_down_distance"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "objective"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_teams_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.text "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "age"
    t.integer "sex"
    t.float "height"
    t.float "weight"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "best_times", "users"
  add_foreign_key "objectives", "users"
  add_foreign_key "post_records", "posts"
  add_foreign_key "posts", "users"
  add_foreign_key "teams", "users"
end
