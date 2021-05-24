class PlantedsController < ApplicationController

    def remove_plant
        planted = Planted.where(bed_id: planteds_params[:bed_id], plant_id: planteds_params[:plant_id])
        Planted.delete(planted)
        bed = Bed.find(planteds_params[:bed_id])
        render json: bed, include: [:plants], methods: [:space_remaining]
    end

    def create
        plant = Plant.create!(name: planteds_params[:name], image: planteds_params[:image])
        planted = Planted.create!(plant_id: plant.id, bed_id: planteds_params[:bed_id])
        bed = Bed.find(planteds_params[:bed_id])
        render json: bed, include: [:plants], methods: [:space_remaining]
    end

    private

    def planteds_params
        params.require(:planted).permit(:name, :image, :bed_id, :plant_id)
    end

end
