class BedsController < ApplicationController

    def index
        beds = Bed.all
        render json: beds, include: [:plants], methods: [:space_remaining]
    end

end
