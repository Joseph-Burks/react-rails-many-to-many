class Plant < ApplicationRecord
    has_many :planteds
    has_many :beds, through: :planteds
end
