class CreateHomes < ActiveRecord::Migration[7.0]
  def change
    create_table :homes do |t|
      t.date :date
      t.string :predict

      t.timestamps
    end
  end
end
