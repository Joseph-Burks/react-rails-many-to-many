class Bed < ApplicationRecord
    has_many :planteds
    has_many :plants, through: :planteds

    def space_remaining
        max - planteds.length
    end

end
