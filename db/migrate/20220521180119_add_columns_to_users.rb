class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :age, :integer
    add_column :users, :sex, :integer
    add_column :users, :height, :float
    add_column :users, :weight, :float
  end
end
