class RenameTypeColumnToPostRecords < ActiveRecord::Migration[6.1]
  def change
    rename_column :post_records, :type, :record_type # typeというカラム名は使えないため、変更
  end
end
