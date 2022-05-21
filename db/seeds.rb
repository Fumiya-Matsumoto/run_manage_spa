# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
3.times do |n|
    user = User.new(
        email: "test_#{n}@test.com",
        name: "testユーザー_#{n}",
        password: "password_#{n}"
    )

    12.times do |m|
        post = user.posts.build(
        practice_day: "2022-05-21 10:00".to_datetime,
        kind_of_practice: 0,
        content: "テストの練習です"
        )
        post_record = post.post_records.build(
            distance: 10000,
            time: 2700000,
            record_type: 0
        )
    end

    user.save!
end