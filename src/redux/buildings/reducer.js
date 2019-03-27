import { errorHandler } from "../../helpers/api";
const filters = {
  parking: false,
  resturant: false,
  pool: false,
  elevator: false,
  wifi: false,
  start_price: '',
  end_price: '',
};

const initialState = {
  buildings: [
    {
      "id": 2,
      "price": "25.0",
      "status_label": "عير محجوزة",
      "status": 1,
      "unit_type_label": "شقة",
      "unit_type": 2,
      "entry_time": null,
      "exit_time": null,
      "unit_number": "2",
      "description": "TEST",
      "floor_number": 1,
      "building": {
          "id": 1,
          "name": "عمارة بن  هلابي رقم 1",
          "city_name": "المكلا",
          "address": "الشارع العام - المكلا",
          "status": 1,
          "status_label": "فعال",
          "building_type": 1,
          "building_type_label": "مبنى سكني"
      }
  },
  ],
  building: null,
  pagination: {
    current_page: 1,
    next_page: null,
  },
  fetching: false,
  error: null,
  filters,
};

export default (state = initialState, { type, payload, pushArray }) => {
  switch (type) {
    case 'GET_BUILDINGS':
      return {
        ...state,
        fetching: true,
      };
  
    case 'GET_BUILDINGS_FULFILLED':
      const { pagination, building_units } = payload.data.data;
      const buildings = pushArray ? [
        ...state.buildings,
        ...building_units,
      ] : building_units;
      return {
        ...state,
        fetching: false,        
        buildings,
        pagination,
        error: '',
      }
  
    case 'GET_BUILDINGS_REJECTED':
      return {
        ...state,
        fetching: false,
        error: errorHandler(payload),
      }

    case 'GET_BUILDING':
    return {
      ...state,
      fetching: true,
    };

  case 'GET_BUILDING_FULFILLED':    
    return {
      ...state,
      fetching: false,        
      building: payload.data.data.building_unit,
    }

  case 'BUILDINGS_CHANGE_PRICE':
    return {
      ...state,
      filters: {
        ...state.filters,
        ...payload
      }
    }

  case 'BUILDINGS_CHANGE_FILTER':
    return {
      ...state,
      filters: {
        ...state.filters,
        [payload]: !state.filters.payload
      }
    }

  case 'BUILDINGS_RESET_FILTER':
    return {
      ...state,
      filters
    }
  case 'GET_BUILDING_REJECTED':
    return {
      ...state,
      building: null,
      fetching: false,
      error: errorHandler(payload),
    }

    default:
      return state;
  }
}
