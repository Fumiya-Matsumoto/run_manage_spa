class RemoveColumnsFromPostRecords < ActiveRecord::Migration[6.1]
  def change
    remove_column :post_records, :pace, :float
  end
end
