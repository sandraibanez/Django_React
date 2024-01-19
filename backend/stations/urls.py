from django.urls import path
from . import views
from .views import SlotView
from .views import BicisView
urlpatterns = [      
    #staciones
    path('stations/', views.stations_list, name='stations-list'),
    path('stations/<int:pk>', views.stations_detail, name='stations-detail'),
    path('stations/published', views.stations_list_published, name='stations-list-published'),
    # slot
    path('slot', SlotView.as_view({'get': 'getSlots'})),
    path('slot/<int:id>', SlotView.as_view({"get": "getOneSlot"})),
    #bicis
    path('bici', BicisView.as_view({'get': 'getBicis'})),
    path('bici/<int:id>', BicisView.as_view({'get': 'getOneBicis'})),
    path('bici', BicisView.as_view({'post': 'post'})),
    path('bici/<int:id>', BicisView.as_view({'put': 'put'})),
    path('bici/<int:id>', BicisView.as_view({'delete': 'delete'}))
]