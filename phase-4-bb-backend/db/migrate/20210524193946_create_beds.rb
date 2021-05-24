class CreateBeds < ActiveRecord::Migration[6.1]
  def change
    create_table :beds do |t|
      t.string :name
      t.integer :max
      t.timestamps
    end
  end
end
