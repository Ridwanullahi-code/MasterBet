class ChangeDataTypePredict < ActiveRecord::Migration[7.0]
  def change
    change_column :predictions, :predict, :string
  end
end
