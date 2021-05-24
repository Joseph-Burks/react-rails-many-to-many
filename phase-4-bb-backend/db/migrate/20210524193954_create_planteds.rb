class CreatePlanteds < ActiveRecord::Migration[6.1]
  def change
    create_table :planteds do |t|
      t.references :bed
      t.references :plant
      t.timestamps
    end
  end
end
