class CreatePostRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :post_records do |t|
      t.references :post, null: false, foreign_key: true
      t.float :distance, null: false
      t.float :time, null: false
      t.float :pace
      t.integer :type
      t.timestamps
    end
  end
end
