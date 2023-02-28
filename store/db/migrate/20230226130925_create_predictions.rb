class CreatePredictions < ActiveRecord::Migration[7.0]
  def change
    create_table :predictions do |t|
      t.date :date
      t.string :predict , array: true, default: []

      t.timestamps
    end
  end
end
