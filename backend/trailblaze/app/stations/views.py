from django.shortcuts import render
from django.http.response import JsonResponse
from django.http import HttpResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework import viewsets
from django.urls import reverse
from rest_framework.response import Response
from .models import Stations
from .models import Bicis 
from .models import Slot
from .serializers import SlotSerializer
from .serializers import BicisSerializer
from .serializers import StationsSerializer
from rest_framework.decorators import api_view

class StationsView(viewsets.GenericViewSet):
    serializer_class = StationsSerializer
    queryset = Stations.objects.all()
    
    def getStations(self, request):
        stations = Stations.objects.all()
        stations_serializer = StationsSerializer(stations, many=True)
        return Response(stations_serializer.data)
    
    def getOneStation(self, request, slug):
        station = Stations.objects.get(slug=slug)
        station_serializer = StationsSerializer(station)
        return Response(station_serializer.data)

    def delete(self, request, slug):
        station = Stations.objects.get(slug=slug)
        station.delete()
        return Response({'data': 'Station deleted successfully'})

class BicisView(viewsets.GenericViewSet):
    serializer_class = BicisSerializer
    queryset = Bicis.objects.all()
    # def get_permissions(self):
    #     if self.request.method == 'GET':
    #         self.permission_classes = [AllowAny]
    #     else:
    #         self.permission_classes = [IsAuthenticated, IsAdmin]
    #     return super(BicisView, self).get_permissions()

    def getBicis(self, request, slug=None):
        bicis = Bicis.objects.all()
        bicis_serializer = BicisSerializer(bicis, many=True)
        return Response(bicis_serializer.data)

    def getOneBicis(self, request, slug):
        bicis = Bicis.objects.get(slug=slug)
        bicis_serializer = BicisSerializer(bicis)
        return Response(bicis_serializer.data)

    def delete(self, request, slug):
        bicis = Bicis.objects.get(slug=slug)
        bicis.delete()
        return Response({'data': 'Bicis deleted successfully'})


class SlotView(viewsets.GenericViewSet):
    serializer_class = SlotSerializer
    queryset = Slot.objects.all()
    # def get_permissions(self):
    #     if self.request.method == 'GET':
    #         self.permission_classes = [AllowAny]
    #     else:
    #         self.permission_classes = [IsAuthenticated, IsAdmin]
    #     return super(SlotView, self).get_permissions()

    def getSlots(self, request):
        if request.GET.get('stations_id') is not None:
            slots = Slot.objects.filter(stations_id=request.GET.get('stations_id'))
        else:
            slots = Slot.objects.all()
        serializer = SlotSerializer(slots, many=True)
        return Response(serializer.data)

    # def getOneSlot(self, request, id):
    #     slot = Slot.objects.all(pk=id)
    #     slot_serializer = SlotSerializer(slot)
    #     return Response(slot_serializer.data)
