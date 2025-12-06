import { NextRequest, NextResponse } from 'next/server'
import { rooms } from '@/lib/data'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { roomId, name, email, phone, checkIn, checkOut, additionalInfo } = body

    // Validate required fields
    if (!roomId || !name || !email || !phone || !checkIn || !checkOut) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate phone format (basic validation)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      )
    }

    // Check if room exists and is available
    const room = rooms.find((r) => r.id === roomId)
    if (!room) {
      return NextResponse.json(
        { error: 'Selected room type not found' },
        { status: 404 }
      )
    }

    if (room.available <= 0) {
      return NextResponse.json(
        { error: 'Selected room type is currently full. Please select another option.' },
        { status: 400 }
      )
    }

    // Validate check-in date
    const checkInDate = new Date(checkIn)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (checkInDate < today) {
      return NextResponse.json(
        { error: 'Check-in date cannot be in the past' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Save booking to database
    // 2. Update room availability
    // 3. Send confirmation email to user
    // 4. Send notification email to admin
    // 5. Create calendar event/reminder
    // 6. Process payment (if applicable)

    // For now, we'll just simulate success
    console.log('Booking request submission:', {
      roomId,
      roomType: room.type,
      name,
      email,
      phone,
      checkIn,
      duration: checkOut,
      additionalInfo,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      {
        success: true,
        message: 'Your booking request has been received. We will contact you within 24 hours to confirm your reservation.',
        bookingId: `BSH-${Date.now()}`,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing booking:', error)
    return NextResponse.json(
      { error: 'Failed to process your booking request. Please try again later.' },
      { status: 500 }
    )
  }
}

