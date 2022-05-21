class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.references :user, null: false, foreign_key: true
      t.string :objective
      t.timestamps
    end
  end
end
