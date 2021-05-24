# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Planted.destroy_all
Plant.destroy_all
Bed.destroy_all

lavender = Plant.create!(name: 'Lavender', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_lavender_flower02.jpg/1200px-Single_lavender_flower02.jpg')
basil = Plant.create!(name: 'Basil', image: 'https://images.immediate.co.uk/production/volatile/sites/10/2018/02/58573c5d-a0b5-4cbe-aa76-6286fa062f14-3a43658.jpg?quality=90&resize=960%2C640')
flowers = Bed.create!(name: 'Flowers', max: 20)
herbs = Bed.create!(name: 'Herbs', max: 20)
Planted.create!(bed_id: herbs.id, plant_id: lavender.id)
Planted.create!(bed_id: herbs.id, plant_id: basil.id)
Planted.create!(bed_id: flowers.id, plant_id: lavender.id)