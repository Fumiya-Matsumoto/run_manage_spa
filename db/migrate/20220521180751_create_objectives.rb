class CreateObjectives < ActiveRecord::Migration[6.1]
  def change
    create_table :objectives do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :year, null: false
      t.integer :month, null: false
      t.string :content
      t.text :todo_content
      t.timestamps
    end
  end
end
